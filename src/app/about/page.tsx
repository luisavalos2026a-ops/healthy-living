import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import styles from './about.module.css';

export default function About() {
    return (
        <main>
            <Section className={styles.mission}>
                <h1 className={styles.missionTitle}>Our Mission</h1>
                <p className={styles.missionText}>
                    We believe that healthy living shouldn't be complicated. Our goal is to provide accessible,
                    evidence-based resources that empower you to make small, sustainable changes for a happier life.
                </p>
            </Section>

            <Section variant="muted">
                <div className={styles.story}>
                    <div className={styles.storyContent}>
                        <h2>Where It All Started</h2>
                        <p>
                            Healthy Living began as a small community of fitness enthusiasts and nutritionists
                            who wanted to cut through the noise of fad diets and unrealistic workout plans.
                        </p>
                        <p>
                            Today, we have grown into a platform that serves thousands of individuals on their
                            journey to better health. We focus on holistic wellness—mind, body, and spirit.
                        </p>
                        <Button href="/auth/signup">Join Our Community</Button>
                    </div>
                    <div className={styles.storyImage}>
                        [Team Image Placeholder]
                    </div>
                </div>
            </Section>
        </main>
    );
}
