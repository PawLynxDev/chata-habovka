import InterierGallery from "@/components/interier/InterierGallery";
import { getContent } from "@/lib/content";

export default async function InterierPage() {
  const content = await getContent();
  return (
    <InterierGallery data={content.interier} bookingUrl={content.bookingUrl} />
  );
}
