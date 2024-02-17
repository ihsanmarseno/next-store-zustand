"use client";
import ReactDom from "react-dom";
import useCart from "./(store)/store";

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        onClick={closeModal}
        className="bg-transparent absolute inset-0"
      ></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center justify-between text-xl relative">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className="fa-solid fa-xmark cursor-pointer hover:opacity-60"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translalte-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>

        <div className="p-4 overflow-scroll flex-1 flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>There is nothing in your cart</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex border-l border-solid border-slate-700 px-2 flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      <p>${cartItem.cost / 100}</p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
