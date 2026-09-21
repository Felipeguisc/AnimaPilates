# AnimaPilates

Site em português (pt-BR) da **AnimaPilates**, estúdio de **Anielle Pereira**, fisioterapeuta especializada em Pilates na **Rua Fauta Rath, 69**, em **Lages, Santa Catarina**. Também oferece massagem miofascial e fisioterapia.

Landing page pensada para busca no Google: HTML semântico, metadados, Open Graph, `sitemap.xml`, `robots.txt` e JSON-LD. O agendamento online ainda não existe — os botões levam ao WhatsApp, telefone ou Instagram, prontos para um módulo de consultas no futuro.

Não há autenticação nem banco de dados.

## Rodar localmente

Requisitos: Node.js 20+ (o projeto foi gerado com Node 22).

```bash
cd ~/Projects/AnimaPilates
npm install
npm run dev
```

O servidor sobe em [http://127.0.0.1:43127](http://127.0.0.1:43127) (porta fora das comuns 3000, 5173 e 8080).

Para produção local:

```bash
npm run build
npm start
```

## SEO e URL pública

Por padrão, sitemap, robots e Open Graph usam `http://127.0.0.1:43127`. Quando o site for publicado, defina:

```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

Veja `.env.example`.

## Contato (placeholder)

- Telefone: (49) 99948-4290 — `tel:+5549999484290`
- Instagram: [@aniellepereira_fisio](https://instagram.com/aniellepereira_fisio)

## Stack

Next.js (App Router), TypeScript, Tailwind CSS e shadcn/ui.
