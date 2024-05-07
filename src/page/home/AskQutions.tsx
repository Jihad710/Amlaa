import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const AskQutions = () => {
  const [fastOpen, setFastOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thiredOpen, setThirdOpen] = useState(false);
  return (
    <div className="my-32 w-9/12 mx-auto">
      <h1 className="text-center font-bold text-4xl pb-10">FAQs</h1>
      <div>
        <div>
          <p
            className="flex items-center text-lg "
            onClick={() => setFastOpen(!fastOpen)}
          >
            <span>{fastOpen ? <TiMinus /> : <FaPlus />}</span>
            <span className="ps-4">Do you offer returns/exchanges?</span>
          </p>
          <div
            className={`${
              fastOpen
                ? "opacity-100 max-h-96 transition-all duration-300 ease-in-out overflow-y-auto"
                : "opacity-0 max-h-0 transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            <p> Yes, we do offer returns and exchanges.</p>
            <p>
              - Returns will be considered up to 14 days from when the product
              was received and in perfect selling condition and unworn. Tags
              must be included and unbroken. Please head to our Returns/Exchange
              Portal in order to place a return request.
            </p>{" "}
            <span>1. Exchanges</span>
            <p>
              In this case, create an exchange request on the Exchange/Return
              Portal. We will initiate a reverse pick-up for your order. In this
              case, create an exchange request on the Exchange/Return Portal. We
              will initiate a reverse pick-up for your order. from our facility.
            </p>
            <span> 2. Returns </span>
            <p>
              In this case, a reverse pickup will be initiated and the products
              will be picked up from your location. Once the items have passed
              quality check, a refund will be initiated to the original payment
              method or as store credits. Restocking and transportation charge
              of Rs.150 will be deducted per item. Refunds to payment method can
              take 4-5 business days to reflect in your account. Refund to store
              credits are instant. - All items are inspected thoroughly before a
              return is processed. Items found worn/used/unsellable will be
              rejected and returned back to you. If you receive a faulty item,
              please raise a return request within 3 days of receipt as we
              cannot assist you after that time frame. Please contact
              wecare@desiminimals.com for assistance. - Products purchased on
              "SALE" cannot be cancelled once the order is placed and are not
              eligible for return/refund/exchange. - Headwear and accessories
              cannot be returned. We cannot refund your postage costs unless the
              product is faulty / incorrect. If your item is faulty or
              incorrect, you will have to let us know within 3 days of receipt.
              We cannot give any refunds/assistance after this time period.
              Please make sure that you have carefully reviewed your order
              before finalizing your purchase
            </p>
          </div>
        </div>
        <div>
          <p
            className="flex items-center py-5 text-lg"
            onClick={() => setSecondOpen(!secondOpen)}
          >
            <span>{secondOpen ? <TiMinus /> : <FaPlus />}</span>
            <span className="ps-4">Which size should I buy?</span>
          </p>
          <div
            className={`${
              secondOpen
                ? "opacity-100 max-h-96 transition-all duration-300 ease-in-out overflow-y-auto"
                : "opacity-0 max-h-0 transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            <p>
              We highly recommend checking the size guide before placing an
              order. The size guide is available on every product page for your
              reference. In case you are still confused, you can always call us
              at +91 9830983103 for any size related queries. Our team will be
              there to help you out :
            </p>
            <p>
              Timings - Tuesday - Saturday
              <span>11am - 7pm</span>
            </p>
          </div>
        </div>
        <div>
          <p
            className="flex items-center text-lg"
            onClick={() => setThirdOpen(!thiredOpen)}
          >
            <span>{thiredOpen ? <TiMinus /> : <FaPlus />}</span>
            <span className="ps-4">What are the shipping times and cost?</span>
          </p>
          <div
            className={`${
              thiredOpen
                ? "opacity-100 max-h-96 transition-all duration-300 ease-in-out overflow-y-auto"
                : "opacity-0 max-h-0 transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            <span>We offer the following shipping methods:</span>
            <p>
              <span>Free Standard Shipping :</span> 4-8 business days
            </p>
            <p>
              <span>Paid Express Shipping (₹200) : </span>2-4 business days
            </p>

            <p>Cash on delivery is Rs.100 extra.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQutions;
