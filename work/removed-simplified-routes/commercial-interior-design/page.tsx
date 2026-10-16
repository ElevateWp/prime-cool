import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('commercial-interior-design');
export default function Page() { return <ServiceLandingPage slug="commercial-interior-design" />; }
