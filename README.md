# Museum App

A modern museum website built with Next.js, Prisma, and Supabase.

## Features

- 🖼️ Full-stack Next.js application with API routes
- 🗄️ PostgreSQL database with Prisma ORM
- ☁️ Hosted on Supabase with connection pooling
- 🎨 Modern UI with TypeScript
- 🔒 Secure environment configuration

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/I-Yanis-I/museum-api.git
cd museum-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
src/
├── app/           # Next.js App Router
│   ├── api/       # API routes
│   └── ...        # Pages and components
├── lib/           # Utility libraries (Prisma client)
└── ...
prisma/
└── schema.prisma  # Database schema
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npx prisma studio` - Open Prisma database studio

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
NODE_ENV=development
DATABASE_URL="your-supabase-connection-string"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

## API Endpoints

### Health Check
- `GET /api/health` - Service health check
- `GET /api/` - API status

*More endpoints coming soon...*

## Database

This project uses Prisma with PostgreSQL (Supabase) for data management.

```bash
# View database
npx prisma studio

# Reset database
npx prisma db push --force-reset
```

## Deployment

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
