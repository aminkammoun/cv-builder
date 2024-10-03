import React from 'react';
// Import your component

import { Text, View, StyleSheet, Page, Document } from '@react-pdf/renderer';

// Define styles for PDF layout
const pdfStyles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        fontSize: 12,
        fontWeight: 'bold',
    },
    subHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 12,
        marginBottom: 5,
    },
    summary: {
        fontSize: 10,
        color: 'gray',
    },
});
interface GlobalMediumProps {
    tR?: string;
    tL?: string;Document
    bR?: string;
    bL?: string;
    summary?: string;

}
const MyDocument: React.FC<GlobalMediumProps> = ({ tR, tL, bR, bL, summary }) => {

    // PDF View
    return (
        <Document>
            <Page>


                <View style={pdfStyles.section}>
                    <View style={pdfStyles.header}>
                        {tR && <Text>{tR}</Text>}
                        {tL && <Text>{tL}</Text>}
                    </View>
                    <View style={pdfStyles.subHeader}>
                        {bL && <Text>{bL}</Text>}
                        {bR && <Text>{bR}</Text>}
                    </View>
                    {summary && <Text style={pdfStyles.summary}>{summary}</Text>}
                </View>
            </Page>
        </Document>
    );

}

export default MyDocument;