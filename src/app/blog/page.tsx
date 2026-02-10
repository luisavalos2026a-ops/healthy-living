import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/posts';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import styles from './blog.module.css';

export default function Blog() {
    return (
        <main>
            <Section className="text-center" variant="muted">
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Wellness Blog</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Expert insights, tips, and stories to inspire your journey to a healthier lifestyle.
                </p>
            </Section>

            <Section>
                <div className={styles.blogGrid}>
                    {blogPosts.map((post) => (
                        <Card key={post.id} hoverable className={styles.postCard}>
                            <div className={styles.postImage}>
                                [Image Placeholder]
                            </div>
                            <div className={styles.category}>{post.category}</div>
                            <h2 className={styles.title}>{post.title}</h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.meta}>
                                <span>{post.date}</span>
                                <span>{post.author}</span>
                            </div>
                            <Button
                                href={`/blog/${post.slug}`}
                                variant="ghost"
                                size="small"
                                className="mt-4"
                                style={{ marginTop: '1rem', paddingLeft: 0, justifyContent: 'flex-start' }}
                            >
                                Read More <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
                            </Button>
                        </Card>
                    ))}
                </div>
            </Section>
        </main>
    );
}
