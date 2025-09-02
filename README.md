# School App

A Next.js project using **shadcn/ui** and **Tailwind CSS**.

## Database Setup

We use **MySQL** in Docker with **Prisma**.

### 1. Start MySQL in Docker(optional)

```bash
docker compose up -d
```

### 2. Install Prisma

```bash
npm install @prisma/client
npm install prisma --save-dev
```

### 3. Initialize Prisma

```bash
npx prisma init
```

### 4. Configure `.env`

Update your `.env` file:

```
DATABASE_URL="mysql://root:yourpassword@localhost:3306/schooldb"
```

### 5. Create and Migrate Prisma Schema

Edit `prisma/schema.prisma` as needed, then run:

```bash
npx prisma migrate dev --name init
```
