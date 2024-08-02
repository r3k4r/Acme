import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/font';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton, } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';


export default async function Page() {
  
  // const [ latestInvoices, cardData] = await Promise.all([
  //   fetchLatestInvoices(),
  //   fetchCardData()
  // ]);

  // const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = cardData;

  return (
    <>
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          {await CardWrapper()}
        </Suspense>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {await RevenueChart()}
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
        {await LatestInvoices()}
        </Suspense>
        </div>
      </main>
    </>
  );
}
