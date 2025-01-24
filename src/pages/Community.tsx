import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, ThumbsUp, Clock } from "lucide-react";

interface Post {
  id: number;
  author: string;
  question: string;
  timestamp: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "John Smith",
      question: "What's the best time to plant wheat in a Mediterranean climate?",
      timestamp: "2 hours ago",
      answers: [
        {
          id: 1,
          author: "Agricultural Expert",
          content: "In Mediterranean climates, the best time to plant wheat is typically in late fall (October-November). This allows the wheat to establish itself during the mild, wet winter months.",
          timestamp: "1 hour ago",
          likes: 5,
        },
      ],
    },
  ]);
  const [newQuestion, setNewQuestion] = useState("");
  const [answerContent, setAnswerContent] = useState("");
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const { toast } = useToast();

  const handlePostQuestion = () => {
    if (!newQuestion.trim()) {
      toast({
        title: "Error",
        description: "Please enter your question",
        variant: "destructive",
      });
      return;
    }

    const newPost: Post = {
      id: posts.length + 1,
      author: localStorage.getItem("userName") || "Anonymous",
      question: newQuestion,
      timestamp: "Just now",
      answers: [],
    };

    setPosts([newPost, ...posts]);
    setNewQuestion("");
    toast({
      title: "Success",
      description: "Your question has been posted!",
    });
  };

  const handleAnswer = (postId: number) => {
    setActivePostId(postId);
  };

  const submitAnswer = (postId: number) => {
    if (!answerContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter your answer",
        variant: "destructive",
      });
      return;
    }

    const newAnswer: Answer = {
      id: Math.random(),
      author: localStorage.getItem("userName") || "Anonymous",
      content: answerContent,
      timestamp: "Just now",
      likes: 0,
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          answers: [...post.answers, newAnswer],
        };
      }
      return post;
    }));

    setAnswerContent("");
    setActivePostId(null);
    toast({
      title: "Success",
      description: "Your answer has been posted!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Farmer Community Forum</h1>
        
        {/* Ask Question Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
          <Textarea
            placeholder="What's your farming question?"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handlePostQuestion}>Post Question</Button>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{post.question}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Answers */}
              <div className="mt-4 space-y-4">
                {post.answers.map((answer) => (
                  <div key={answer.id} className="bg-gray-50 rounded-lg p-4">
                    <p className="mb-2">{answer.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{answer.author}</span>
                        <span>•</span>
                        <span>{answer.timestamp}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        {answer.likes}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Answer Input */}
              {activePostId === post.id ? (
                <div className="mt-4 space-y-4">
                  <Textarea
                    placeholder="Write your answer..."
                    value={answerContent}
                    onChange={(e) => setAnswerContent(e.target.value)}
                    className="mb-2"
                  />
                  <div className="flex gap-2">
                    <Button onClick={() => submitAnswer(post.id)}>Submit Answer</Button>
                    <Button variant="outline" onClick={() => setActivePostId(null)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outline"
                  className="mt-4 gap-2"
                  onClick={() => handleAnswer(post.id)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Answer
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}