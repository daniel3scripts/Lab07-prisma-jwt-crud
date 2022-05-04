-- CreateTable
CREATE TABLE "stories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "stories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stories" ADD CONSTRAINT "stories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
