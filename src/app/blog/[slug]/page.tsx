import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/posts';
import { Section } from '@/components/ui/Section';
import styles from './post.module.css';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <Section>
                <div className={styles.article}>
                    <Link href="/blog" className={styles.backLink}>
                        <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>{post.category}</span>
                        <h1 className={styles.title}>{post.title}</h1>
                        <div className={styles.meta}>
                            By {post.author} • {post.date}
                        </div>
                    </header>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </Section>
        </article>
    );
}
