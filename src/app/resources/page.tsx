'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Calculator, Droplets, Plus, Minus } from 'lucide-react';
import styles from './resources.module.css';

export default function Resources() {
    // BMI Calculator State
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);

    // Hydration Tracker State
    const [waterIntake, setWaterIntake] = useState(0);
    const dailyGoal = 8; // glasses

    const calculateBMI = () => {
        const ft = parseFloat(feet);
        const inch = parseFloat(inches);
        const w = parseFloat(weight);

        if (ft >= 0 && inch >= 0 && w > 0) {
            const totalInches = (ft * 12) + inch;
            if (totalInches > 0) {
                const bmiValue = (703 * w) / (totalInches * totalInches);
                setBmi(parseFloat(bmiValue.toFixed(1)));
            }
        }
    };

    const adjustWater = (amount: number) => {
        setWaterIntake(prev => Math.max(0, prev + amount));
    };

    return (
        <main>
            <Section className="text-center" variant="muted">
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>
                    Wellness Tools
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Interactive resources to help you track and improve your health metrics.
                </p>
            </Section>

            <Section>
                <div className={styles.resourcesContainer}>
                    {/* BMI Calculator */}
                    <div className={styles.toolCard}>
                        <div className={styles.toolHeader}>
                            <Calculator size={32} />
                            <h2 className={styles.toolTitle}>BMI Calculator</h2>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Height</label>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input
                                    type="number"
                                    className={styles.input}
                                    value={feet}
                                    onChange={(e) => setFeet(e.target.value)}
                                    placeholder="ft"
                                />
                                <input
                                    type="number"
                                    className={styles.input}
                                    value={inches}
                                    onChange={(e) => setInches(e.target.value)}
                                    placeholder="in"
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Weight (lbs)</label>
                            <input
                                type="number"
                                className={styles.input}
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="e.g. 150"
                            />
                        </div>

                        <Button onClick={calculateBMI} fullWidth>Calculate BMI</Button>

                        {bmi !== null && (
                            <div className={styles.result}>
                                Your BMI is: {bmi}
                                <div style={{ fontSize: '0.875rem', fontWeight: 400, marginTop: '0.5rem' }}>
                                    {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obese'}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Hydration Tracker */}
                    <div className={styles.toolCard}>
                        <div className={styles.toolHeader}>
                            <Droplets size={32} />
                            <h2 className={styles.toolTitle}>Hydration Tracker</h2>
                        </div>

                        <div className={styles.hydrationTracker}>
                            <p className={styles.label}>Daily Goal: {dailyGoal} Glasses</p>

                            <div className={styles.waterLevel}>
                                {waterIntake} <span style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)' }}>/ {dailyGoal}</span>
                            </div>

                            <div className={styles.waterControls}>
                                <Button
                                    onClick={() => adjustWater(-1)}
                                    variant="outline"
                                    aria-label="Decrease water intake"
                                >
                                    <Minus size={20} />
                                </Button>
                                <Button
                                    onClick={() => adjustWater(1)}
                                    variant="primary"
                                    aria-label="Increase water intake"
                                >
                                    <Plus size={20} />
                                </Button>
                            </div>

                            <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--color-sand)', borderRadius: '5px', marginTop: '1rem', overflow: 'hidden' }}>
                                <div
                                    style={{
                                        width: `${Math.min((waterIntake / dailyGoal) * 100, 100)}%`,
                                        height: '100%',
                                        backgroundColor: 'var(--accent)',
                                        transition: 'width 0.3s ease'
                                    }}
                                />
                            </div>

                            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                                {waterIntake >= dailyGoal ? 'Goal reached! Great job!' : 'Keep drinking!'}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
