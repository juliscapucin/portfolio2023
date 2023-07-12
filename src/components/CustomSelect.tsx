import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';

export default function CustomSelect() {
 return (
  <div className='max-w-[180px] overflow-hidden'>
   <Select>
    <SelectTrigger className='w-[180px]'>
     <SelectValue placeholder='Theme' />
    </SelectTrigger>
    <SelectContent className='w-[180px]'>
     <SelectItem value='dark'>Dark</SelectItem>
     <SelectItem value='light'>Light</SelectItem>
     <SelectItem value='color'>Color</SelectItem>
    </SelectContent>
   </Select>
  </div>
 );
}
