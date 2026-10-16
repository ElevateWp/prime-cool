import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
export const metadata: Metadata = getServiceMetadata('dizayn-kommercheskikh-intererov');
export default function Page() { return <ServiceLandingPage slug="dizayn-kommercheskikh-intererov" />; }
