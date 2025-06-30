import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Plus, Square, Grid3X3, Settings, Info } from "lucide-react";

export default function FloatingTextBox() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
      bg-white/80 dark:bg-[#18181b]/80 
      border border-gray-200 dark:border-gray-700 
      text-gray-900 dark:text-gray-100 
      backdrop-blur-md rounded-2xl p-4 z-50 flex flex-wrap gap-3 items-center justify-center max-w-4xl w-full mx-4 transition-colors">
      {/* Add Button */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 h-8 w-8 transition-colors">
        <Plus className="h-4 w-4" />
      </Button>

      {/* Main Input */}
      <Input 
        placeholder="Describe your image..." 
        className="flex-1 min-w-[300px] bg-transparent border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-500 dark:focus:border-gray-400 rounded-xl transition-colors"
      />

      {/* Aspect Ratio Selector */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 h-8 text-xs transition-colors">
        1:1
      </Button>

      {/* Grid/Layout Button */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 h-8 w-8 transition-colors">
        <Grid3X3 className="h-4 w-4" />
      </Button>

      {/* 4v Button */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 h-8 text-xs transition-colors">
        4v
      </Button>

      {/* Public Toggle */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 h-8 text-xs transition-colors">
        Public
      </Button>

      {/* Settings */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 h-8 w-8 transition-colors">
        <Settings className="h-4 w-4" />
      </Button>

      {/* Info */}
      <Button size="sm" variant="ghost" className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 h-8 w-8 transition-colors">
        <Info className="h-4 w-4" />
      </Button>
    </div>
  );
}