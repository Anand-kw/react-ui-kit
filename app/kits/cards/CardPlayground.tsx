// CardPlayground.tsx - Complete Full Code
import React, { useState, useEffect } from "react";
import {
  Copy,
  Edit,
  Check,
  RefreshCw,
  ChevronLeft,
  Settings,
  HelpCircle,
  Share2,
  Code,
  Eye,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import Card, { CardProps } from "@/src/components/card/Card";
import FullScreenPopup from "@/src/components/modal/full-screen-popup/FullScreenPopup";

// Import JSON file directly
import cardsData from './cards.json';

// ============== Types ==============

interface CardExample {
  id: string;
  name: string;
  description: string;
  props: any;
  code: string;
  category?: string;
}

// ============== Utility Functions ==============

// Generate clean code from props
const generateCleanCode = (props: any): string => {
  // Check if props is null or undefined
  if (!props || typeof props !== 'object') {
    return '<Card />';
  }
  
  const entries = Object.entries(props);
  const codeLines = entries
    .map(([key, value]) => {
      if (typeof value === 'string') {
        if (value.includes('<') && value.includes('>') && value.includes('/')) {
          return `${key}={<>${value}</>}`;
        }
        return `${key}="${value}"`;
      } else if (typeof value === 'boolean') {
        return value ? key : '';
      } else if (typeof value === 'object' && value !== null) {
        // Handle arrays and objects
        return `${key}={${JSON.stringify(value, null, 2)}}`;
      }
      return '';
    })
    .filter(Boolean);

  if (codeLines.length === 0) {
    return '<Card />';
  }
  return `<Card\n  ${codeLines.join('\n  ')}\n/>`;
};

// ============== Simple Editor Component ==============

interface SimpleEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: 'html' | 'jsx' | 'json';
  placeholder?: string;
  rows?: number;
  className?: string;
  readOnly?: boolean;
}

const SimpleEditor: React.FC<SimpleEditorProps> = ({
  value,
  onChange,
  language = 'html',
  placeholder = 'Enter code...',
  rows = 6,
  className = '',
  readOnly = false,
}) => {
  const [preview, setPreview] = useState(false);

  const lines = value ? value.split('\n').length : 1;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPreview(!preview)}
            className={`px-2 py-1 text-xs rounded transition-colors ${
              preview 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {preview ? '✏️ Edit' : '👁️ Preview'}
          </button>
          <span className="text-xs text-gray-400">
            {language.toUpperCase()} • {lines} lines
          </span>
        </div>
        {language === 'json' && (
          <button
            onClick={() => {
              try {
                const formatted = JSON.stringify(JSON.parse(value), null, 2);
                onChange(formatted);
              } catch (e) {
                // Invalid JSON, ignore
              }
            }}
            className="text-xs text-blue-600 hover:underline"
          >
            Format
          </button>
        )}
      </div>

      {preview ? (
        <div 
          className={`p-3 bg-white border border-gray-200 rounded-lg min-h-[100px] prose prose-sm max-w-none overflow-auto ${className}`}
          dangerouslySetInnerHTML={{ __html: value || '<span class="text-gray-400">Empty content</span>' }}
        />
      ) : (
        <div className="relative">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            readOnly={readOnly}
            className={`w-full px-3 py-2 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className} ${
              readOnly ? 'opacity-75' : ''
            }`}
            style={{
              lineHeight: '1.6',
              tabSize: 2,
            }}
          />
          {!readOnly && (
            <div 
              className="absolute left-0 top-0 bottom-0 px-2 py-2 text-xs text-gray-500 font-mono text-right select-none overflow-hidden"
              style={{ minWidth: '30px' }}
            >
              {Array.from({ length: Math.min(lines, 20) }, (_, i) => (
                <div key={i + 1}>{i + 1}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============== Preview Panel Component ==============

interface PreviewPanelProps {
  example: CardExample | null;
  onClose: () => void;
  onEdit: () => void;
  onCopy: (code: string) => void;
  isOpen: boolean;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({
  example,
  onClose,
  onEdit,
  onCopy,
  isOpen,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [showCode, setShowCode] = useState(false);

  if (!example || !isOpen) return null;

  const cleanCode = example.code || generateCleanCode(example.props);
  const cleanProps = example.props || {};

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className={`
          absolute right-0 top-0 h-full bg-white shadow-2xl transition-all duration-300
          ${isFullscreen ? 'w-full' : 'w-[700px]'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
            <div>
              <h3 className="font-semibold text-gray-800">{example.name}</h3>
              <p className="text-xs text-gray-500">{example.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`p-1.5 rounded-lg transition-colors ${
                showCode ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'
              }`}
              title="Toggle Code View"
            >
              <Code size={16} />
            </button>
            <button
              onClick={() => setScale(Math.min(scale + 0.1, 1.5))}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-xs"
              title="Zoom In"
            >
              +
            </button>
            <span className="text-xs text-gray-500 w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale(Math.max(scale - 0.1, 0.5))}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-xs"
              title="Zoom Out"
            >
              −
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={() => onCopy(cleanCode)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              title="Copy Code"
            >
              <Copy size={16} />
            </button>
            <button
              onClick={onEdit}
              className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-70px)]">
          {showCode ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-700">Generated Code</h4>
                <button
                  onClick={() => onCopy(cleanCode)}
                  className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  Copy
                </button>
              </div>
              <SimpleEditor
                value={cleanCode}
                onChange={() => {}}
                language="jsx"
                rows={10}
                readOnly={true}
              />
              
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-700">Card Props</h4>
                <button
                  onClick={() => onCopy(JSON.stringify(cleanProps, null, 2))}
                  className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                >
                  Copy JSON
                </button>
              </div>
              <SimpleEditor
                value={JSON.stringify(cleanProps, null, 2)}
                onChange={() => {}}
                language="json"
                rows={8}
                readOnly={true}
              />
            </div>
          ) : (
            <div 
              className="transition-transform duration-300 flex items-center justify-center min-h-[400px]"
              style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
            >
              <Card {...example.props} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============== Edit Content Component ==============

interface EditContentProps {
  currentProps: any;
  onSave: (props: any) => void;
  onClose: () => void;
  exampleName: string;
}

const EditContent: React.FC<EditContentProps> = ({
  currentProps,
  onSave,
  onClose,
  exampleName,
}) => {
  const [editedProps, setEditedProps] = useState<any>(currentProps || {});
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  const handleChange = (path: string[], value: any) => {
    setEditedProps((prev: any) => {
      const newProps = { ...prev };
      let current: any = newProps;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]] || {};
      }
      current[path[path.length - 1]] = value;
      return newProps;
    });
  };

  const cleanCode = generateCleanCode(editedProps);

  // Helper to render HTML content
  const renderHTMLContent = (htmlString: string) => {
    if (!htmlString) return null;
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Left: Edit Form */}
      <div className="space-y-4 overflow-y-auto pr-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">
            Card Properties
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                activeTab === 'editor' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                activeTab === 'preview' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Preview
            </button>
          </div>
        </div>

        {activeTab === 'editor' ? (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Variant</label>
              <select
                value={editedProps.variant || 'default'}
                onChange={(e) => handleChange(['variant'], e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
                <option value="info">Info</option>
                <option value="dark">Dark</option>
                <option value="transparent">Transparent</option>
                <option value="gradient">Gradient</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Size</label>
              <select
                value={editedProps.size || 'default'}
                onChange={(e) => handleChange(['size'], e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="xs">XS</option>
                <option value="sm">SM</option>
                <option value="default">Default</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="3xl">3XL</option>
                <option value="full">Full</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Padding</label>
              <select
                value={editedProps.padding || 'default'}
                onChange={(e) => handleChange(['padding'], e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">None</option>
                <option value="xs">XS</option>
                <option value="sm">SM</option>
                <option value="default">Default</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Rounded</label>
              <select
                value={editedProps.rounded || 'xl'}
                onChange={(e) => handleChange(['rounded'], e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">None</option>
                <option value="sm">SM</option>
                <option value="default">Default</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="3xl">3XL</option>
                <option value="full">Full</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Shadow</label>
              <select
                value={editedProps.shadow || 'sm'}
                onChange={(e) => handleChange(['shadow'], e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">None</option>
                <option value="sm">SM</option>
                <option value="default">Default</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="inner">Inner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Header</label>
              <textarea
                value={typeof editedProps.header === 'string' ? editedProps.header : ''}
                onChange={(e) => handleChange(['header'], e.target.value)}
                placeholder="Header text or HTML"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 font-mono"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Subtitle</label>
              <textarea
                value={typeof editedProps.subtitle === 'string' ? editedProps.subtitle : ''}
                onChange={(e) => handleChange(['subtitle'], e.target.value)}
                placeholder="Subtitle text or HTML"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 font-mono"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Body</label>
              <textarea
                value={typeof editedProps.body === 'string' ? editedProps.body : ''}
                onChange={(e) => handleChange(['body'], e.target.value)}
                placeholder="Body text or HTML"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 font-mono"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Footer</label>
              <textarea
                value={typeof editedProps.footer === 'string' ? editedProps.footer : ''}
                onChange={(e) => handleChange(['footer'], e.target.value)}
                placeholder="Footer text or HTML"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 font-mono"
                rows={3}
              />
            </div>

            <div className="space-y-2 border-t border-gray-200 pt-3">
              <h3 className="text-sm font-medium text-gray-700">Behavior</h3>
              <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={editedProps.hoverable || false}
                    onChange={(e) => handleChange(['hoverable'], e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Hoverable
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={editedProps.clickable || false}
                    onChange={(e) => handleChange(['clickable'], e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Clickable
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={editedProps.border !== false}
                    onChange={(e) => handleChange(['border'], e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Border
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={editedProps.animate || false}
                    onChange={(e) => handleChange(['animate'], e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Animate
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-xs font-medium text-gray-600 mb-2">Generated Code</h4>
              <pre className="text-xs text-gray-700 overflow-auto max-h-60 font-mono whitespace-pre-wrap">
                {cleanCode}
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(cleanCode)}
                className="mt-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Copy Code
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-xs font-medium text-gray-600 mb-2">JSON Props</h4>
              <pre className="text-xs text-gray-700 overflow-auto max-h-40 font-mono">
                {JSON.stringify(editedProps, null, 2)}
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(JSON.stringify(editedProps, null, 2))}
                className="mt-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Copy JSON
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            onSave(editedProps);
            onClose();
          }}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4"
        >
          💾 Save Changes
        </button>
      </div>

      {/* Right: Live Preview */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Live Preview</h3>
        <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center min-h-[400px] border-2 border-dashed border-gray-300">
          <Card {...editedProps} />
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <h4 className="text-xs font-medium text-gray-600 mb-2">HTML Content Preview</h4>
          <div className="prose prose-sm max-w-none">
            {typeof editedProps.header === 'string' && editedProps.header.includes('<') && (
              <div className="mb-2">
                <span className="text-xs text-gray-400">Header:</span>
                <div className="p-2 bg-white rounded border border-gray-200">
                  {renderHTMLContent(editedProps.header)}
                </div>
              </div>
            )}
            {typeof editedProps.body === 'string' && editedProps.body.includes('<') && (
              <div className="mb-2">
                <span className="text-xs text-gray-400">Body:</span>
                <div className="p-2 bg-white rounded border border-gray-200">
                  {renderHTMLContent(editedProps.body)}
                </div>
              </div>
            )}
            {typeof editedProps.footer === 'string' && editedProps.footer.includes('<') && (
              <div>
                <span className="text-xs text-gray-400">Footer:</span>
                <div className="p-2 bg-white rounded border border-gray-200">
                  {renderHTMLContent(editedProps.footer)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============== Main Card Playground ==============

const CardPlayground: React.FC = () => {
  // Load cards from JSON file
  const loadCardsFromJSON = (data: any): CardExample[] => {
    if (!data || !data.cards) return [];
    
    return data.cards.map((card: any) => {
      // Ensure props exists, fallback to empty object
      const props = card.props || {};
      
      return {
        id: card.id || `card-${Math.random().toString(36).substr(2, 9)}`,
        name: card.name || 'Unnamed Card',
        description: card.description || 'No description',
        category: card.category || 'Uncategorized',
        props: props,
        code: card.code || generateCleanCode(props),
      };
    });
  };

  const [examples, setExamples] = useState<CardExample[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Load cards from imported JSON
      const loadedCards = loadCardsFromJSON(cardsData);
      setExamples(loadedCards);
    } catch (error) {
      console.error('Error loading cards:', error);
      setExamples([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const [selectedExample, setSelectedExample] = useState<CardExample | null>(null);
  const [previewExample, setPreviewExample] = useState<CardExample | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Get unique categories
  const categories = ["all", ...new Set(examples.map(e => e.category || "Uncategorized"))];

  // Filter examples
  const filteredExamples = examples.filter((example) => {
    const matchesSearch =
      example.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || example.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Copy code to clipboard
  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reset card to original
  const resetCard = (id: string) => {
    const original = examples.find((e) => e.id === id);
    if (original) {
      setExamples((prev) =>
        prev.map((e) => (e.id === id ? { ...e, props: original.props } : e)),
      );
    }
  };

  // Save edited props
  const saveEditedProps = (newProps: any) => {
    if (selectedExample) {
      setExamples((prev) =>
        prev.map((e) =>
          e.id === selectedExample.id ? { ...e, props: newProps } : e,
        ),
      );
      const updatedCode = generateCleanCode(newProps);
      setExamples((prev) =>
        prev.map((e) =>
          e.id === selectedExample.id ? { ...e, code: updatedCode } : e,
        ),
      );
    }
  };

  // Open preview panel
  const openPreview = (example: CardExample) => {
    setPreviewExample(example);
    setIsPreviewOpen(true);
  };

  // Close preview panel
  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewExample(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              🎨 Card Playground
            </h1>
            <p className="text-gray-500 mt-1">
              Explore, customize, and preview {examples.length} card components
            </p>
          </div>
          <div className="text-sm text-gray-400">
            {filteredExamples.length} cards
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search cards by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    filterCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group"
            >
              <div className="p-4 bg-gray-50 flex items-center justify-center min-h-[200px] relative">
                <Card {...example.props} />
                {/* Eye icon overlay */}
                <button
                  onClick={() => openPreview(example)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
                  title="Preview Card"
                >
                  <Eye size={18} className="text-gray-600" />
                </button>
              </div>

              <div className="p-4 border-t border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {example.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {example.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openPreview(example)}
                      className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600"
                      title="Preview Card"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExample(example);
                        setIsEditModalOpen(true);
                      }}
                      className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600"
                      title="Edit Card"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => copyCode(example.code || generateCleanCode(example.props), example.id)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Copy Code"
                    >
                      {copiedId === example.id ? (
                        <Check size={16} className="text-green-600" />
                      ) : (
                        <Copy size={16} className="text-gray-600" />
                      )}
                    </button>
                    <button
                      onClick={() => resetCard(example.id)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Reset Card"
                    >
                      <RefreshCw size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {example.category && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {example.category}
                    </span>
                  )}
                  {example.props.variant && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {example.props.variant}
                    </span>
                  )}
                  {example.props.image && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      📷 {example.props.image.position || 'top'}
                    </span>
                  )}
                  {example.props.gradient && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      🌈 gradient
                    </span>
                  )}
                  {example.props.hoverable && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      hover
                    </span>
                  )}
                </div>

                {/* Code Preview */}
                <div className="mt-3 bg-gray-50 rounded-lg p-2">
                  <pre className="text-xs text-gray-600 overflow-x-auto whitespace-pre-wrap max-h-20">
                    {(example.code || generateCleanCode(example.props)).substring(0, 100) + '...'}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700">No cards found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Preview Panel */}
        <PreviewPanel
          example={previewExample}
          isOpen={isPreviewOpen}
          onClose={closePreview}
          onEdit={() => {
            if (previewExample) {
              setSelectedExample(previewExample);
              setIsEditModalOpen(true);
              closePreview();
            }
          }}
          onCopy={(code) => {
            navigator.clipboard.writeText(code);
            setCopiedId(previewExample?.id || '');
            setTimeout(() => setCopiedId(null), 2000);
          }}
        />

        {/* Edit Modal */}
        {selectedExample && (
          <FullScreenPopup
            open={isEditModalOpen}
            onClose={() => {
              setIsEditModalOpen(false);
              setSelectedExample(null);
            }}
            title={`Edit: ${selectedExample.name}`}
            subtitle="Customize card properties in real-time"
            darkMode={false}
            leftActions={[
              {
                icon: <ChevronLeft className="w-4 h-4" />,
                label: "Back",
                onClick: () => {
                  setIsEditModalOpen(false);
                  setSelectedExample(null);
                },
                variant: "secondary",
              },
              {
                icon: <Code className="w-4 h-4" />,
                label: "View Code",
                onClick: () => console.log("View Code"),
                variant: "ghost",
              },
            ]}
            rightActions={[
              {
                icon: <Share2 className="w-4 h-4" />,
                label: "Share",
                onClick: () => console.log("Share"),
                variant: "ghost",
              },
              {
                icon: <Settings className="w-4 h-4" />,
                label: "Settings",
                onClick: () => console.log("Settings"),
                variant: "ghost",
              },
              {
                icon: <HelpCircle className="w-4 h-4" />,
                label: "Help",
                onClick: () => console.log("Help"),
                variant: "ghost",
              },
            ]}
            showSearch={false}
            isFullscreen={isFullscreen}
            onFullscreenToggle={() => setIsFullscreen(!isFullscreen)}
            padding="md"
            footer={
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-gray-500">
                  💡 Live preview updates as you change properties
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsEditModalOpen(false);
                      setSelectedExample(null);
                    }}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (selectedExample) {
                        saveEditedProps(selectedExample.props);
                      }
                      setIsEditModalOpen(false);
                      setSelectedExample(null);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    💾 Save Changes
                  </button>
                </div>
              </div>
            }
          >
            <EditContent
              currentProps={selectedExample.props}
              onSave={saveEditedProps}
              onClose={() => {
                setIsEditModalOpen(false);
                setSelectedExample(null);
              }}
              exampleName={selectedExample.name}
            />
          </FullScreenPopup>
        )}
      </div>
    </div>
  );
};

export default CardPlayground;