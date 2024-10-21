import { useResumeContext } from '../../../context/ResumeContext';
import { View } from "@react-pdf/renderer";
import {
    ResumePDFSection,
    ResumePDFText,
} from "../../Common";
import { styles, spacing } from "../../Common/styles";


const Index: React.FC = ({


    themeColor,
}: {
 

    themeColor: string;
    showBulletPoints: boolean;
}) => {
    
    const { resumeData } = useResumeContext();
    return (
        <ResumePDFSection themeColor={themeColor} heading='Education'>
            {resumeData.education.map(
                ({ institution, degree, rangeDate, summary }, idx) => {
                    // Hide institution name if it is the same as the previous school
                    const hideSchoolName =
                        idx > 0 && institution === resumeData.education[idx - 1].institution;
                    const showDescriptions = true;

                    return (
                        <View key={idx}>
                            {!hideSchoolName && (
                                <ResumePDFText bold={true}>{institution}</ResumePDFText>
                            )}
                            <View
                                style={{
                                    ...styles.flexRowBetween,
                                    marginTop: hideSchoolName
                                        ? "-" + spacing["1"]
                                        : spacing["1.5"],
                                }}
                            >
                                <ResumePDFText>{degree}</ResumePDFText>
                                <ResumePDFText>{rangeDate}</ResumePDFText>
                            </View>
                            {showDescriptions && (
                                <View style={{ ...styles.flexCol, marginTop: spacing["1.5"] }}>
                                    {/* <ResumePDFBulletList
                                        items={summary}
                                        showBulletPoints={showBulletPoints}
                                    /> */}
                                    <ResumePDFText>{summary}</ResumePDFText>
                                </View>
                            )}
                        </View>
                    );
                }
            )}
        </ResumePDFSection>
    );
};

export default Index