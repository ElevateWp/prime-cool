import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('pressure-washing');
export default function Page() { return <ServiceLandingPage slug="pressure-washing" />; }
