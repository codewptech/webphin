-- CreateTable
CREATE TABLE "InsightCategory" (
    "id" UUID NOT NULL DEFAULT uuidv7(),
    "public_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "slug_text" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "seo_title" TEXT,
    "seo_description" TEXT,
    "published_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InsightCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insight" (
    "id" UUID NOT NULL DEFAULT uuidv7(),
    "public_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "slug_text" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "body_markdown" TEXT NOT NULL,
    "hero_url" TEXT,
    "category_id" UUID NOT NULL,
    "published_at" TIMESTAMPTZ(6),
    "home_order" INTEGER,
    "featured_order" INTEGER,
    "seo_title" TEXT,
    "seo_description" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Insight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InsightCategory_public_id_key" ON "InsightCategory"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "InsightCategory_name_key" ON "InsightCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Insight_public_id_key" ON "Insight"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "Insight_home_order_key" ON "Insight"("home_order");

-- CreateIndex
CREATE UNIQUE INDEX "Insight_featured_order_key" ON "Insight"("featured_order");

-- CreateIndex
CREATE INDEX "Insight_category_id_idx" ON "Insight"("category_id");

-- CreateIndex
CREATE INDEX "Insight_published_at_idx" ON "Insight"("published_at");

-- AddForeignKey
ALTER TABLE "Insight" ADD CONSTRAINT "Insight_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "InsightCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
