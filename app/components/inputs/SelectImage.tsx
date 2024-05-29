'use client'
import { ImageType } from "@/app/admin/add-products/AddProductForm";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface SelectedImageProps {
    item?: ImageType;
    handlefileChange: (value: File) => void
}
const SelectImage: React.FC<SelectedImageProps> = ({ item, handlefileChange }) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            handlefileChange(acceptedFiles[0])
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop,accept:{"image/*":[".jpeg", ".png"]}, });
    return (
    <div
    {...getRootProps()}
    className="border-2 border-slate-400 p-2 border-dashed cursor-pointer text-sm font-normal text-slate-400 flex items-center justify-centert">
     ,<input {...getInputProps()} />
     {isDragActive?(
        <p>Drop the image here...</p>
        ):(
            <p>+{item?.color}image</p>

        )
     }

    </div>);
}

export default SelectImage;