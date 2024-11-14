'use client'
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore } from "@/lib/store";
//import { initiliazeGraph } from '@/lib/features/graph/graphSlice'

export default function StoreProvider({ vertices, edges, children }) {
    const storeRef = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        //storeRef.current.dispatch(initializeGraph(vertices, edges))
    }
    return <Provider store={storeRef.current}>{children}</Provider>

}