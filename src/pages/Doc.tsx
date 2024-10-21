
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver'; // You'll need to use file-saver for handling the download
import MediumDisplayData from '../partials/mediumDisplayData';
export default function Doc() {
    const handleDownload = async () => {
        // Generate the PDF and get a blob
        const blob = await pdf(<MediumDisplayData
            tR="Right Title"
            tL="Left Title"
            bR="Bottom Right"
            bL="Bottom Left"
            summary="This is a summary."
            isPdf={true}
        />).toBlob();

        // Use FileSaver to trigger the download
        saveAs(blob, 'my-document.pdf');
    };
    return (
        <div>
            <h2>Download PDF on Button Click</h2>
            <button
                onClick={handleDownload}
                style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Download PDF
            </button>
        </div>
    );
}