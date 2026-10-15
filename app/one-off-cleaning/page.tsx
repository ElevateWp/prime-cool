import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('one-off-cleaning');
export default function Page() { return <ServiceLandingPage slug="one-off-cleaning" />; }
