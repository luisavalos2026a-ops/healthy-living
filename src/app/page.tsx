import { ArrowRight, Activity, Utensils, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import styles from './home.module.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Embrace a <span style={{ color: 'var(--primary)' }}>Healthier</span> You
        </h1>
        <p className={styles.heroSubtitle}>
          Your comprehensive guide to building sustainable wellness habits.
          Expert nutrition, effective workouts, and community support in one place.
        </p>
        <div className={styles.heroActions}>
          <Button href="/auth/signup" size="large">
            Get Started <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </Button>
          <Button href="/about" variant="outline" size="large">
            Learn More
          </Button>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className={styles.featuresGrid}>
          <Card hoverable className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Utensils size={32} />
            </div>
            <h3 className={styles.featureTitle}>Nutritious Recipes</h3>
            <p className={styles.featureText}>
              Discover hundreds of healthy, delicious recipes tailored to your dietary needs and preferences.
            </p>
            <Button href="/recipes" variant="ghost" size="small">
              Browse Recipes <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
            </Button>
          </Card>

          <Card hoverable className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Activity size={32} />
            </div>
            <h3 className={styles.featureTitle}>Workout Plans</h3>
            <p className={styles.featureText}>
              Structured fitness programs for all levels. Strength, cardio, yoga, and more to keep you moving.
            </p>
            <Button href="/workouts" variant="ghost" size="small">
              Start Training <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
            </Button>
          </Card>

          <Card hoverable className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Heart size={32} />
            </div>
            <h3 className={styles.featureTitle}>Holistic Wellness</h3>
            <p className={styles.featureText}>
              Resources for mental health, sleep, and mindfulness to help you find balance in daily life.
            </p>
            <Button href="/blog" variant="ghost" size="small">
              Read Articles <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
            </Button>
          </Card>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className={styles.testimonials} variant="default">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--color-text-main)' }}>
          What Our Community Says
        </h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              "Healthy Living completely transformed my approach to nutrition. The recipes are delicious and easy to make!"
            </p>
            <div className={styles.author}>
              <div className={styles.authorInitial}>S</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Sarah Jenkins</span>
                <span className={styles.authorRole}>Yoga Instructor</span>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              "Finally, a wellness platform that doesn't feel overwhelming. The workout plans are perfect for my busy schedule."
            </p>
            <div className={styles.author}>
              <div className={styles.authorInitial}>M</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Mike Ross</span>
                <span className={styles.authorRole}>Software Engineer</span>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              "The community support here is incredible. I never feel alone on my journey to better health."
            </p>
            <div className={styles.author}>
              <div className={styles.authorInitial}>E</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Emma Clark</span>
                <span className={styles.authorRole}>Teacher</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
