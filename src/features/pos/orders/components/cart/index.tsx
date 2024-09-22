import { Button, SelectedOrderLists } from "@/src/features";

export function Cart() {

    return (
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[100svh] mb-0">
            <div>
                <div className="flex text-xl font-semibold">
                    <Button 
                      className="bg-[#FFA3A3]  hover:bg-[#FFA3A3] hover:scale-105 hover:translate-y-[-2px]">
                        Back
                    </Button>
                    <div className="w-full text-center">
                        <p>Order Id</p>
                        <p>000000</p>
                    </div> 
                    <Button
                        className="bg-[#FFD875] hover:bg-[#FFD875] hover:scale-105 hover:translate-y-[-2px]">
                        Save
                    </Button>
                </div>
                <div>
                    <Button className="bg-[#d7d5fd] text-gray-500 w-full rounded-lg mt-4 hover:bg-[#d7d5fd] hover:scale-105 hover:translate-y-[-2px]">
                        <p className="text-[#8766EF]">Customer Name: customer</p>
                    </Button>
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <p>Order Type: ordertype</p>
                    <p>Time : ordertype</p>
                  </div>
                  <div>
                    <p>Served By : username</p>
                    <p>Date: username</p>
                  </div>
                </div>
            </div>

          <div className="text-center text-black-400 flex flex-col justify-start h-full">

            <SelectedOrderLists quantity={1} productName="product" price={100000} onRemove={() => {}}/>
            
          </div>
          <div>
            <div className="text-left text-gray-500 space-y-1">

              <div className="flex justify-between">
                <p>Subtotal: Item(s)</p><p>Rp. </p>
              </div>

              <div className="flex justify-between">
                <p>VAT</p>
                <p>Rp.</p>
              </div>
              <div className="flex justify-between">
                <p>Service</p>
                <p>Rp. 10000</p>
              </div>
              <div className="font-bold flex justify-between">
                <p>Grand Total</p>
                <p>Rp. </p>
              </div>
            </div>
            <button className="bg-[#9A97DA] text-white w-full py-3 mt-4 rounded-lg hover:bg-[#9A97DA] hover:scale-105 hover:translate-y-[-2px]">
              <div className="flex justify-around">
                <p className="text-xl font-bold">Payment</p>
                <p className="text-xl font-bold">Rp. </p></div>
            </button>
          </div>
        </div>
    )
}
