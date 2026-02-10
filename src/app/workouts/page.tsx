import { workoutPlans, WorkoutPlan } from '@/data/workouts';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Calendar, Repeat, ArrowRight } from 'lucide-react';
import styles from './workouts.module.css';

export default function Workouts() {
    const groupedPlans = {
        Beginner: workoutPlans.filter(p => p.level === 'Beginner'),
        Intermediate: workoutPlans.filter(p => p.level === 'Intermediate'),
        Advanced: workoutPlans.filter(p => p.level === 'Advanced'),
    };

    const getLevelClass = (level: string) => {
        switch (level) {
            case 'Beginner': return styles.beginnerCard;
            case 'Intermediate': return styles.intermediateCard;
            case 'Advanced': return styles.advancedCard;
            default: return '';
        }
    };

    const getBadgeClass = (level: string) => {
        switch (level) {
            case 'Beginner': return styles.beginnerBadge;
            case 'Intermediate': return styles.intermediateBadge;
            case 'Advanced': return styles.advancedBadge;
            default: return '';
        }
    };

    return (
        <main>
            <Section className="text-center" variant="muted">
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                    Workout Plans
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Choose a program that fits your goals and experience level.
                </p>
            </Section>

            <Section>
                <div className={styles.levelsContainer}>
                    {(Object.keys(groupedPlans) as Array<keyof typeof groupedPlans>).map((level) => (
                        <div key={level} className={styles.levelSection}>
                            <div className={styles.levelHeader}>
                                <span className={`${styles.levelBadge} ${getBadgeClass(level)}`}>{level}</span>
                                <h2 className={styles.levelTitle}>Programs</h2>
                            </div>

                            <div className={styles.plansGrid}>
                                {groupedPlans[level].map((plan) => (
                                    <Card key={plan.id} hoverable className={`${styles.planCard} ${getLevelClass(level)}`}>
                                        <div className={styles.planHeader}>
                                            <h3 className={styles.planTitle}>{plan.title}</h3>
                                        </div>

                                        <p className={styles.planDescription}>{plan.description}</p>

                                        <div className={styles.planMeta}>
                                            <div className={styles.metaItem}>
                                                <Calendar size={18} className="text-muted" />
                                                {plan.duration}
                                            </div>
                                            <div className={styles.metaItem}>
                                                <Repeat size={18} className="text-muted" />
                                                {plan.frequency}
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className={styles.focusTags}>
                                                {plan.focus.map(tag => (
                                                    <span key={tag} className={styles.focusTag}>{tag}</span>
                                                ))}
                                            </div>
                                            <Button variant="ghost" size="small" className="mt-4" style={{ marginTop: '1.5rem', paddingLeft: 0 }}>
                                                View Details <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
