#!/bin/bash

# Next.js 16 Upgrade Script
# This script automates the upgrade process for MindReader Biotech

set -e  # Exit on error

echo "🚀 Starting Next.js 16 Upgrade..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Backup
echo -e "${BLUE}📦 Step 1: Creating backup...${NC}"
BACKUP_DIR="backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp package.json "$BACKUP_DIR/"
cp package-lock.json "$BACKUP_DIR/" 2>/dev/null || true
cp next.config.mjs "$BACKUP_DIR/"
echo -e "${GREEN}✓ Backup created in $BACKUP_DIR${NC}"
echo ""

# Step 2: Clean install
echo -e "${BLUE}🧹 Step 2: Cleaning node_modules and cache...${NC}"
rm -rf node_modules
rm -rf .next
rm -f package-lock.json
echo -e "${GREEN}✓ Cleaned${NC}"
echo ""

# Step 3: Install dependencies
echo -e "${BLUE}📥 Step 3: Installing Next.js 16 and dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 4: Verify versions
echo -e "${BLUE}🔍 Step 4: Verifying versions...${NC}"
echo "Installed versions:"
npm list next react react-dom --depth=0
echo ""

# Step 5: Check for middleware.ts
echo -e "${BLUE}🔍 Step 5: Checking for middleware.ts...${NC}"
if [ -f "middleware.ts" ] || [ -f "src/middleware.ts" ]; then
    echo -e "${YELLOW}⚠️  Found middleware.ts - Consider renaming to proxy.ts${NC}"
    echo "   See NEXT_JS_16_UPGRADE_GUIDE.md for migration instructions"
else
    echo -e "${GREEN}✓ No middleware.ts found${NC}"
fi
echo ""

# Step 6: Build test
echo -e "${BLUE}🏗️  Step 6: Testing build...${NC}"
npm run build
echo -e "${GREEN}✓ Build successful${NC}"
echo ""

# Step 7: Summary
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Next.js 16 Upgrade Complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📚 Next Steps:"
echo "   1. Review NEXT_JS_16_UPGRADE_GUIDE.md"
echo "   2. Check NEXT_JS_16_QUICK_REFERENCE.md for quick tips"
echo "   3. Visit /nextjs16-demo to see new features"
echo "   4. Start dev server: npm run dev"
echo ""
echo "🎯 New Features Available:"
echo "   • Cache Components with 'use cache' directive"
echo "   • Turbopack (5-10x faster builds)"
echo "   • Improved caching APIs (revalidateTag, updateTag, refresh)"
echo "   • React 19.2 features"
echo ""
echo "📦 Backup saved in: $BACKUP_DIR"
echo ""
echo -e "${BLUE}Happy coding! 🎉${NC}"
