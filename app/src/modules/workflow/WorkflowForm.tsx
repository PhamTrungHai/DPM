// import { useState } from 'react';
// import { useCreateWorkflow } from './hook';
// import type { Workflow } from './api';
// import { useTranslation } from 'react-i18next';

// export function WorkflowForm() {
//     const [formData, setFormData] = useState<Omit<Workflow, 'id'>>({
//         index: 1,
//         description: '',
//         title: '',
//         titleEn: '',
//     });

//     const { t } = useTranslation();
//     const { mutate, isPending, isError, error, isSuccess } = useCreateWorkflow();
//     const handleChange =
//         (field: keyof Omit<Workflow, 'id'>) => (event: React.ChangeEvent<HTMLInputElement>) => {
//             setFormData((prev) => ({
//                 ...prev,
//                 [field]: event.target.value,
//             }));
//         };

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         mutate(formData, {
//             onSuccess: () => {
//                 // Reset form after successful submission
//                 setFormData({
//                     index: 1,
//                     description: '',
//                     title: '',
//                     titleEn: '',
//                 });
//             },
//         });
//     };

//     return <div></div>;
// }
