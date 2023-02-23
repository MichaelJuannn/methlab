-- CreateTable
CREATE TABLE "Obat" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "bahan" TEXT[],
    "proses_pembuatan" TEXT[],
    "sumber" TEXT NOT NULL,
    "gambar" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Obat_pkey" PRIMARY KEY ("id")
);
