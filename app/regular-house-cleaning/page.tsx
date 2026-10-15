import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('regular-house-cleaning');
export default function Page() { return <ServiceLandingPage slug="regular-house-cleaning" />; }
