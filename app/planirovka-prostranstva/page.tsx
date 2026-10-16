import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('planirovka-prostranstva');
export default function Page() { return <ServiceLandingPage slug="planirovka-prostranstva" />; }
