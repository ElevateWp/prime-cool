import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('deep-house-cleaning');
export default function Page() { return <ServiceLandingPage slug="deep-house-cleaning" />; }
