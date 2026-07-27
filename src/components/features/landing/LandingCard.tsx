import { APP } from '@/config/app';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function LandingCard() {
  return (
    <Card className="w-full max-w-3xl border shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold">{APP.name}</CardTitle>

        <CardDescription className="text-lg">{APP.description}</CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-8">
        <div className="flex justify-center">
          <Badge variant="default">🟢 Application Running</Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Version</p>
            <p className="font-semibold">{APP.version}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Environment</p>
            <p className="font-semibold capitalize">{APP.environment}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Technology Stack</p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Next.js 15</Badge>
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">Spring Boot 3.5</Badge>
            <Badge variant="secondary">Java 21</Badge>
            <Badge variant="secondary">WebFlux</Badge>
            <Badge variant="secondary">DDD</Badge>
            <Badge variant="secondary">Hexagonal</Badge>
            <Badge variant="secondary">CQRS</Badge>
          </div>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex justify-center">
        <a href={APP.apiDocsUrl} target="_blank" rel="noopener noreferrer">
          <Button className="cursor-pointer">Open API Documentation</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
