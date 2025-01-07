import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useToast } from "./ui/use-toast";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

interface CommentsProps {
  postSlug: string;
}

const Comments = ({ postSlug }: CommentsProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      toast({
        title: "Error",
        description: "Please enter a comment",
        variant: "destructive",
      });
      return;
    }

    const comment: Comment = {
      id: Date.now(),
      author: "Anonymous User",
      content: newComment,
      date: new Date().toLocaleDateString(),
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment("");
    
    toast({
      title: "Success",
      description: "Comment added successfully",
    });
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Comments</h2>
      
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Write a comment..."
            rows={4}
          />
        </div>
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {comment.author[0]}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">{comment.author}</h4>
                  <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </Card>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default Comments;