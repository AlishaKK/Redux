"use client"; // Ensure this is at the very top

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/store/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-2">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" 
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}
