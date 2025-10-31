-- Fix database schema to match Prisma schema

-- Add missing columns to User table if they don't exist
DO $$ 
BEGIN
    -- Add plan column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='User' AND column_name='plan') THEN
        ALTER TABLE "User" ADD COLUMN "plan" TEXT NOT NULL DEFAULT 'FREE';
    END IF;
    
    -- Add stripeCustomerId if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='User' AND column_name='stripeCustomerId') THEN
        ALTER TABLE "User" ADD COLUMN "stripeCustomerId" TEXT;
    END IF;
    
    -- Add stripeSubscriptionId if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='User' AND column_name='stripeSubscriptionId') THEN
        ALTER TABLE "User" ADD COLUMN "stripeSubscriptionId" TEXT;
    END IF;
    
    -- Add stripePriceId if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='User' AND column_name='stripePriceId') THEN
        ALTER TABLE "User" ADD COLUMN "stripePriceId" TEXT;
    END IF;
    
    -- Add stripeCurrentPeriodEnd if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='User' AND column_name='stripeCurrentPeriodEnd') THEN
        ALTER TABLE "User" ADD COLUMN "stripeCurrentPeriodEnd" TIMESTAMP(3);
    END IF;
END $$;

-- Create SubscriptionPlan enum if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'SubscriptionPlan') THEN
        CREATE TYPE "SubscriptionPlan" AS ENUM ('FREE', 'PRO');
    END IF;
END $$;

-- Update plan column to use enum type
DO $$
BEGIN
    -- First, update any existing data to valid enum values
    UPDATE "User" SET "plan" = 'FREE' WHERE "plan" NOT IN ('FREE', 'PRO');
    
    -- Then alter the column type
    ALTER TABLE "User" ALTER COLUMN "plan" TYPE "SubscriptionPlan" USING "plan"::"SubscriptionPlan";
EXCEPTION
    WHEN OTHERS THEN
        -- If it fails, the column might already be the correct type
        NULL;
END $$;

-- Add unique constraints if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'User_stripeCustomerId_key') THEN
        ALTER TABLE "User" ADD CONSTRAINT "User_stripeCustomerId_key" UNIQUE ("stripeCustomerId");
    END IF;
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'User_stripeSubscriptionId_key') THEN
        ALTER TABLE "User" ADD CONSTRAINT "User_stripeSubscriptionId_key" UNIQUE ("stripeSubscriptionId");
    END IF;
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;

-- Add indexes if they don't exist
CREATE INDEX IF NOT EXISTS "User_plan_idx" ON "User"("plan");
CREATE INDEX IF NOT EXISTS "User_stripeCustomerId_idx" ON "User"("stripeCustomerId");
