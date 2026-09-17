import type { ReactElement } from "react";
import CourseForm from "../../components/Courseform";

const SafeCourseForm = CourseForm as unknown as (props: {
    initialCourse?: unknown;
    onSave: () => void;
    onCancel: () => void;
}) => ReactElement;

export default function PageTest() {
    const handleSave = () => {
        // no-op for the test page
    };

    const handleCancel = () => {
        // no-op for the test page
    };

    return (
        <SafeCourseForm onSave={handleSave} onCancel={handleCancel} />
    );
}