import React from 'react';

interface FolderTypeContainerProps {
  quotationType?: string;
  productName?: string;
  dateQuoteCreated?: string;
  quotationNumber?: string;
  dateQuoteAccepted?: string;
  productType?: string;
  productDescription?: string;
  userType?: string;
  userName?: string;
  className?: string;
  productCost?: string;
 }

function QuotationContainer({
  quotationType,

  productName,
  quotationNumber,
  dateQuoteCreated,
  dateQuoteAccepted,
  productType,
  productDescription,
  userType,
  userName,
  productCost,

  className,
}: FolderTypeContainerProps
) {

  return (
    <section className={`w-full lg:w-[21.75rem] flex flex-col ${className}`} >
      <section className='bg-beige border h-[4.5rem] w-full flex flex-row justify-between px-4 py-4'>
          <section className='flex flex-col gap-1'>
              {productName && <h1 className='text-button__line '>{productName}</h1>}
              
              {quotationType==='recibida'? 
              <span className='text-paragraph mt-1'>Solcitud {dateQuoteCreated}</span> : 
              <span className='text-paragraph'>{dateQuoteCreated}</span>}

          </section>
          <section className='flex flex-col items-end gap-1'>
              {quotationNumber && <h1 className='text-button__line bg-white text-center  max-w-[5rem] '>#{quotationNumber}</h1>}                
              {quotationType==='recibida'? 
              <span className='text-paragraph mt-1'>Recibida {dateQuoteAccepted}</span> : 
              <span className='text-paragraph'>{dateQuoteAccepted}</span>}
          </section>
      </section>

      <section className='flex flex-col gap-5 border px-4 pb-4 pt-5'>
        <section className='flex flex-row'>
          <span className='text-title mr-3 my-auto'> Productos:</span>
          {productType && <span className='text-title my-auto'>{productType}</span>}
        </section>

        <section className='flex flex-col gap-3 '>
          <span className='text-title mr-3 my-auto'> Descripción:</span>
          {productDescription && <span className='text-paragraph text-justify'>{productDescription}</span>}
        </section>

        {/* Esta seccion, de la línea 65 a la 69 variará en el tipo de solicitud, esto si el usuario es comercial o solicitante. */}
        <section className='flex flex-row justify-between'>
          {userType && <span className='text-title my-auto'> {userType}:</span>}
          {userName && <span className='text-title my-auto'>{userName}</span>}
        </section>

        {productCost && 
          <section className='flex flex-row justify-between'>
            <span className='text-title my-auto'> Precio:</span>
            <span className='text-title my-auto'>${productCost}</span>
          </section>
        }

        {quotationType==='recibida'?
          <section className='flex flex-row justify-between'>
            <span 
            className='text-button__line underline underline-offset-1 hover:cursor-pointer'
            onClick={() => { }}
            >
              Eliminar
            </span>

            <span
            className='text-button__line underline underline-offset-1 hover:cursor-pointer'
            onClick={() => { }}
            >
              Ver detalle
            </span>

          </section>
         :
          <section className='flex flex-row justify-between'>
            <span 
            className='text-button__line underline underline-offset-1 hover:cursor-pointer'
            onClick={() => { }}
            >
              Ver detalle
            </span>

            <span
            className='text-button__line underline underline-offset-1 hover:cursor-pointer'
            onClick={() => { }}
            >
              Enviar al cliente
            </span>

          </section>
        }
      </section>
    </section>
  );
}

export default QuotationContainer;
