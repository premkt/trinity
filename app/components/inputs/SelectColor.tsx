'use client'

import { ImageType } from "@/app/admin/add-products/AddProductForm";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { useCallback, useEffect, useState } from "react";
import SelectImage from "./SelectImage";
import Button from "../Button";

interface SelectedColorProps {
    item: ImageType;
    addImageToState: (value: ImageType) => void;
    removeImageFromState: (value: ImageType) => void;
    isProductCreated: boolean;
}
const SelectedColor: React.FC<SelectedColorProps> = ({ item, addImageToState, removeImageFromState, isProductCreated }) => {
    const [isSelected, setIsSelected] = useState(false)
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        if (isProductCreated) {
            setIsSelected(false);
            setFile(null);
        }
    }, [isProductCreated]);
    const handleFileChange = useCallback((value: File) => {
        setFile(value);
        addImageToState({ ...item, image: value });

    }, []);
    const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSelected(e.target.checked);
        if (!e.target.checked) {
            setFile(null);
            removeImageFromState(item);
        }
    }, [])
    return (<div className="grid gird-cols-1  overflow-y-auto border-b-[1.2px] border-slate-200 items-center p-2"><div className="flex flex-row gap-2 items-center h-[60px]">
        <input id={item.color} type="checkbox" checked={isSelected} onChange={handleCheck} className="cursor-pointer" />
        <label htmlFor={item.color} className="font-medium cursor-pointer">{item.color}</label>
    </div>
        <>
            {isSelected && !file && (<div className="col-span-2 text-center"><SelectImage item={item} handlefileChange={handleFileChange} /></div>)}
            {file && (
                <div className="flex flex-row gap-2 text-sm col-span-2 items-center justify-between">
                    <p>{file?.name}</p>
                    <div className="w-70px"> <Button label="Cancel" small outline onClick={() => {
                        setFile(null)
                        removeImageFromState(item)
                    }} />
                    </div>
                </div>
            )}

        </>
    </div>);
};
export default SelectedColor;