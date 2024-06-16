import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import {fetchCustomersPages} from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({searchParams} : {searchParams?:{query?:string, page?:string}}){
  // const customers = await fetchCustomers();
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);
  return (
    <div className="w-full">
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div> */}
        {/* <Suspense fallback={<InvoicesTableSkeleton />}> */}
      <CustomersTable query={query} currentPage={currentPage}/>
        {/* </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}