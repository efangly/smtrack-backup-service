-- CreateTable
CREATE TABLE "LogDays" (
    "id" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "staticName" TEXT NOT NULL,
    "temp" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "tempDisplay" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "humidity" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "humidityDisplay" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "sendTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plug" BOOLEAN NOT NULL DEFAULT false,
    "door1" BOOLEAN NOT NULL DEFAULT false,
    "door2" BOOLEAN NOT NULL DEFAULT false,
    "door3" BOOLEAN NOT NULL DEFAULT false,
    "internet" BOOLEAN NOT NULL DEFAULT false,
    "probe" TEXT NOT NULL DEFAULT '1',
    "battery" INTEGER NOT NULL DEFAULT 0,
    "tempInternal" DOUBLE PRECISION DEFAULT 0.00,
    "extMemory" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "staticName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TempLogs" (
    "id" TEXT NOT NULL,
    "mcuId" TEXT NOT NULL,
    "internet" BOOLEAN NOT NULL DEFAULT false,
    "door" BOOLEAN NOT NULL DEFAULT false,
    "plugin" BOOLEAN NOT NULL DEFAULT false,
    "tempValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "realValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "date" TEXT,
    "time" TEXT,
    "isAlert" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT,
    "probe" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TempLogs_pkey" PRIMARY KEY ("id")
);
