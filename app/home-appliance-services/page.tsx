import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('home-appliance-services');
export default function Page() { return <ServiceLandingPage slug="home-appliance-services" />; }
