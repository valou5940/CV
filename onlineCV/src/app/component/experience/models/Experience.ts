import { Skills } from '../../skills/models/Skills';

export class Experience {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    skills: Skills[];
}