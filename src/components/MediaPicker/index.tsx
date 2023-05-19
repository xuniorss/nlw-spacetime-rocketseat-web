'use client'

import Image from 'next/image'
import { ChangeEvent, useCallback, useState } from 'react'

export const MediaPicker = () => {
   const [preview, setPreview] = useState<string | null>(null)

   const onFileSelected = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
         const { files } = event.target

         if (!files) return

         const previewURL = URL.createObjectURL(files[0])

         setPreview(previewURL)
      },
      []
   )

   return (
      <>
         <input
            onChange={onFileSelected}
            name="coverUrl"
            type="file"
            id="media"
            accept="image/*"
            className="invisible h-0 w-0"
         />

         {preview && (
            <Image
               src={preview}
               alt=""
               width={100}
               height={100}
               className="aspect-video w-full rounded-lg object-cover"
            />
         )}
      </>
   )
}
