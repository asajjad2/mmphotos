import React from 'react'
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from "./Modal";

export default function Dashboard() {
  return (
        <div className="dashboard">
            <Title/>
            <UploadForm />
            <ImageGrid />
            <Modal/>
        </div>
    )
}
