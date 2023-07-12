import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';

export default function CustomSelect() {
 return (
  <Select>
   <SelectTrigger className='w-[180px]'>
    <SelectValue placeholder='Theme' />
   </SelectTrigger>
   <SelectContent>
    <SelectItem value='dark'>Dark</SelectItem>
    <SelectItem value='light'>Light</SelectItem>
    <SelectItem value='color'>Color</SelectItem>
   </SelectContent>
  </Select>
 );
}
