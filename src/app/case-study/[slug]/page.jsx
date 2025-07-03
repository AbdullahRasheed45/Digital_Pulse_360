import { caseStudies } from "../data/case-studies"
import CaseStudyContent from "./CaseStudyContent"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default function CaseStudyPage() {
  return <CaseStudyContent />
}

