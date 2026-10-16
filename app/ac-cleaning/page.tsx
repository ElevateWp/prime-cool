import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('ac-cleaning');
export default function Page() { return <ServiceLandingPage slug="ac-cleaning" />; }
