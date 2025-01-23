import Link from 'next/link';
import styles from './not-found.module.css';
 
export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>This is a bit awkward...</h2>
      <p>Be patient, you eat an elephant one bite at a time.</p>
      <div><Link href="/">Back to the Landing Page</Link></div>
    </div>
  )
}