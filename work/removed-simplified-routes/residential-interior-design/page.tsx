import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('residential-interior-design');
export default function Page() { return <ServiceLandingPage slug="residential-interior-design" />; }
